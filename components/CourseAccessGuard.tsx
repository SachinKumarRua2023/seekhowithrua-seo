"use client";

import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Inline SVG icons (no lucide-react dependency)
const LockIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const Loader2Icon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
  </svg>
);

interface User {
  id: string;
  email: string;
  name?: string;
  has_bundle_access?: boolean;
  enrolled_courses?: string[];
}

interface CourseAccessGuardProps {
  children: ReactNode;
  courseSlug: string;
  fallback?: ReactNode;
}

export function CourseAccessGuard({ children, courseSlug, fallback }: CourseAccessGuardProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    checkAccess();
  }, [courseSlug]);

  const checkAccess = async () => {
    try {
      // Check localStorage for user data
      const userData = localStorage.getItem("cosmos_user");
      const token = localStorage.getItem("cosmos_auth_token");

      if (!userData || !token) {
        setIsLoading(false);
        return;
      }

      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);

      // Check if user has bundle access or specific course access
      const hasBundle = parsedUser.has_bundle_access || false;
      const enrolledCourses = parsedUser.enrolled_courses || [];
      const hasCourseAccess = enrolledCourses.includes(courseSlug);

      // Verify with backend API for security
      const response = await fetch(
        `https://api.seekhowithrua.com/api/lms/enrollment/check-access/?course=${courseSlug}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setHasAccess(data.has_access || hasBundle || hasCourseAccess);
      } else {
        // Fallback to local data if API fails
        setHasAccess(hasBundle || hasCourseAccess);
      }
    } catch (error) {
      console.error("Access check failed:", error);
      setHasAccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <Loader2Icon className="w-8 h-8 animate-spin text-purple-500 mx-auto mb-4" />
          <p className="text-gray-400">Verifying access...</p>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      fallback || (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <LockIcon className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Login Required
            </h2>
            <p className="text-gray-400 mb-6">
              Please login to access this course. If you haven't purchased yet, 
              check out our Bundle Pack for full access.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={`/login?redirect=${encodeURIComponent(window.location.href)}`}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                href="/bundle-pack"
                className="px-6 py-3 border border-purple-500/30 hover:bg-purple-500/10 text-purple-400 rounded-lg font-medium transition-colors"
              >
                View Bundle Pack
              </Link>
            </div>
          </div>
        </div>
      )
    );
  }

  // Logged in but no access
  if (!hasAccess) {
    return (
      fallback || (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <LockIcon className="w-8 h-8 text-yellow-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Course Locked 🔒
            </h2>
            <p className="text-gray-400 mb-2">
              Hi {user.name || user.email},
            </p>
            <p className="text-gray-400 mb-6">
              This course is locked. Purchase the Bundle Pack to unlock all courses 
              and start learning immediately.
            </p>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-gray-500 line-through">₹8,999</span>
                <span className="text-2xl font-bold text-white">₹4,999</span>
              </div>
              <p className="text-sm text-gray-500">
                Use code: <code className="text-purple-400">seekhowithruatop5</code>
              </p>
            </div>
            <Link
              href="/bundle-pack"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-medium transition-colors"
            >
              Unlock Now — ₹4,999
            </Link>
          </div>
        </div>
      )
    );
  }

  // Has access - render children
  return <>{children}</>;
}

// Hook for checking access in components
export function useCourseAccess(courseSlug: string) {
  const [access, setAccess] = useState({
    isLoading: true,
    isLoggedIn: false,
    hasAccess: false,
    user: null as User | null,
  });

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const userData = localStorage.getItem("cosmos_user");
        const token = localStorage.getItem("cosmos_auth_token");

        if (!userData || !token) {
          setAccess({
            isLoading: false,
            isLoggedIn: false,
            hasAccess: false,
            user: null,
          });
          return;
        }

        const parsedUser = JSON.parse(userData);
        
        const response = await fetch(
          `https://api.seekhowithrua.com/api/lms/enrollment/check-access/?course=${courseSlug}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        let hasAccess = false;
        if (response.ok) {
          const data = await response.json();
          hasAccess = data.has_access;
        }

        setAccess({
          isLoading: false,
          isLoggedIn: true,
          hasAccess,
          user: parsedUser,
        });
      } catch (error) {
        setAccess({
          isLoading: false,
          isLoggedIn: false,
          hasAccess: false,
          user: null,
        });
      }
    };

    checkAccess();
  }, [courseSlug]);

  return access;
}
