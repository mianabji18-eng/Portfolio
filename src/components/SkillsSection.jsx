import { useState } from "react";
import { cn } from '@/lib/utils'; 
const skills = [
    // Core ML Programming
    { name: "Python", level: 95, category: "programming" },
    { name: "R", level: 85, category: "programming" },

    // ML/AI Frameworks
    { name: "TensorFlow", level: 90, category: "frameworks" },
    { name: "PyTorch", level: 88, category: "frameworks" },
    { name: "Scikit-learn", level: 95, category: "frameworks" },
    { name: "Keras", level: 85, category: "frameworks" },
    { name: "XGBoost", level: 80, category: "frameworks" },
    { name: "Hugging Face", level: 82, category: "frameworks" },

    // Data Science Core
    { name: "Pandas", level: 95, category: "data-science" },
    { name: "NumPy", level: 92, category: "data-science" },
    { name: "Matplotlib", level: 88, category: "data-science" },
    { name: "Seaborn", level: 85, category: "data-science" },

    // AI Specializations
    { name: "Computer Vision", level: 85, category: "ai" },
    { name: "Deep Learning", level: 90, category: "ai" },
    { name: "Neural Networks", level: 87, category: "ai" },
    { name: "Transformers", level: 78, category: "ai" },
    { name: "Generative AI", level: 75, category: "ai" },

    // ML Techniques
    { name: "Supervised Learning", level: 95, category: "ml-techniques" },
    { name: "Feature Engineering", level: 90, category: "ml-techniques" },
    { name: "Model Optimization", level: 85, category: "ml-techniques" },
    { name: "Ensemble Methods", level: 85, category: "ml-techniques" },

    // Mathematical Foundation
    { name: "Statistics", level: 90, category: "mathematics" },
    { name: "Linear Algebra", level: 85, category: "mathematics" },
    { name: "Probability Theory", level: 88, category: "mathematics" },

    // MLOps & Deployment
    { name: "MLflow", level: 80, category: "mlops" },
    { name: "Model Deployment", level: 82, category: "mlops" },
    { name: "AWS SageMaker", level: 78, category: "mlops" },

    // Development Tools
    { name: "Jupyter Notebooks", level: 95, category: "tools" },
    { name: "Google Colab", level: 90, category: "tools" }
];

const categories = ["all", "programming", "frameworks", "data-science", "ai", "ml-techniques", "mathematics", "mlops", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return (
        <section 
            id="skills" 
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category,key)=>(
                        <button 
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category 
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]" 
                                style={{width: skill.level + "%"}}/>
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};