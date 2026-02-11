import researchProjects from "@/data/research-data.json";
import Link from "next/link";
import ProjectDetailClient from "./ProjectDetailClient";

// Generate static paths at build time
export async function generateStaticParams() {
    return researchProjects.map((project) => ({
        id: project.id,
    }));
}

interface ProjectDetailPageProps {
    params: {
        id: string;
    };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { id } = await params;
    const project = researchProjects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#f5f1eb] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-serif text-4xl text-[#2E3538] mb-4">Project Not Found</h1>
                    <Link href="/research" className="text-[#0d6d6e] hover:underline">
                        ← Back to Research
                    </Link>
                </div>
            </div>
        );
    }

    return <ProjectDetailClient project={project} />;
}