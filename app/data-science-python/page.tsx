import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Science with Python | Pandas NumPy Matplotlib | Seekho With Rua",
  description:
    "Master Data Science with Python. Learn Pandas, NumPy, Matplotlib, Seaborn, data cleaning, visualization, and statistical analysis. Real-world data science projects with Seekho With Rua.",

  keywords: [
    "data science python",
    "pandas tutorial",
    "numpy tutorial",
    "matplotlib tutorial",
    "data visualization",
    "data cleaning",
    "exploratory data analysis",
    "EDA",
    "seaborn",
    "data science course",
  ],

  alternates: {
    canonical: "https://seekhowithrua.com/data-science-python",
  },

  openGraph: {
    title: "Data Science with Python | Seekho With Rua",
    description:
      "Master Data Science with Python: Pandas, NumPy, Matplotlib, Seaborn, and real-world data projects.",
    url: "https://seekhowithrua.com/data-science-python",
    type: "website",
  },
};

export default function DataSciencePython() {
  return (
    <main className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold">
        🔬 Data Science with Python
      </h1>

      <p className="mt-4 text-lg">
        Master data manipulation, analysis, and visualization using Python. 
        Learn pandas, numpy, matplotlib, seaborn, and real-world data science 
        workflows from data collection to insights.
      </p>

      <h2 className="text-2xl font-semibold mt-10">
        📚 Course Modules
      </h2>

      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li><strong>Python for Data Science:</strong> NumPy, Pandas basics</li>
        <li><strong>Data Manipulation:</strong> Cleaning, transformation, merging</li>
        <li><strong>Data Visualization:</strong> Matplotlib, Seaborn, Plotly</li>
        <li><strong>Statistical Analysis:</strong> Descriptive & inferential stats</li>
        <li><strong>Real-world Projects:</strong> EDA on real datasets</li>
        <li><strong>Feature Engineering:</strong> Creating meaningful features</li>
        <li><strong>Data Wrangling:</strong> Handling missing data, outliers</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10">
        💻 Python Implementation Example
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto text-sm">
{`# Complete EDA Example with Python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.datasets import load_iris

# Load data
iris = load_iris()
df = pd.DataFrame(iris.data, columns=iris.feature_names)
df['species'] = [iris.target_names[t] for t in iris.target]

# Data Overview
print("Dataset Shape:", df.shape)
print("\nData Info:")
print(df.info())

# Statistical Summary
print("\nDescriptive Statistics:")
print(df.describe())

# Check for missing values
print("\nMissing Values:")
print(df.isnull().sum())

# Visualization
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# 1. Distribution plots
sns.histplot(data=df, x='sepal length (cm)', hue='species', kde=True, ax=axes[0,0])
axes[0,0].set_title('Sepal Length Distribution')

# 2. Correlation heatmap
numeric_df = df.select_dtypes(include=[np.number])
sns.heatmap(numeric_df.corr(), annot=True, cmap='coolwarm', ax=axes[0,1])
axes[0,1].set_title('Feature Correlation Matrix')

# 3. Box plots
sns.boxplot(data=df, x='species', y='petal length (cm)', ax=axes[1,0])
axes[1,0].set_title('Petal Length by Species')

# 4. Scatter plot
sns.scatterplot(data=df, x='sepal length (cm)', y='petal length (cm)', 
                hue='species', style='species', s=100, ax=axes[1,1])
axes[1,1].set_title('Sepal vs Petal Length')

plt.tight_layout()
plt.show()

# Feature Engineering
df['sepal_petal_ratio'] = df['sepal length (cm)'] / df['petal length (cm)']
print(f"\nNew feature created: sepal_petal_ratio")`}
      </pre>

      <div className="mt-10 p-6 bg-gradient-to-r from-green-900 to-teal-900 rounded-lg">
        <h3 className="text-xl font-bold mb-4">🎯 Learning Outcomes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black/30 p-4 rounded">
            <h4 className="font-semibold text-green-300">Data Manipulation</h4>
            <p className="text-sm">Master Pandas and NumPy for data manipulation</p>
          </div>
          <div className="bg-black/30 p-4 rounded">
            <h4 className="font-semibold text-teal-300">Visualization</h4>
            <p className="text-sm">Create stunning plots with Matplotlib and Seaborn</p>
          </div>
          <div className="bg-black/30 p-4 rounded">
            <h4 className="font-semibold text-blue-300">Statistics</h4>
            <p className="text-sm">Apply statistical analysis to real datasets</p>
          </div>
          <div className="bg-black/30 p-4 rounded">
            <h4 className="font-semibold text-purple-300">Real Projects</h4>
            <p className="text-sm">Work on actual data science projects</p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a 
          href="https://app.seekhowithrua.com/signup"
          className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-full hover:scale-105 transition-transform"
        >
          🚀 Enroll in Data Science Python →
        </a>
      </div>
    </main>
  );
}
