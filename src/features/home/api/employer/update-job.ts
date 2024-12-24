import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "src/components/ui";
import { apiClient } from "src/lib/api-client";
import { ResponseMessage } from "src/types";
import { z } from "zod";


export const jobSchema = z.object({
  title: z.string().min(1, "Required"),
  tags: z.string().min(1, "Required"), // React, NodeJS, Java, Python, Ruby, PHP, C++, C#, .NET, SQL, NoSQL, AWS, Azure, GCP, Docker, Kubernetes, Jenkins, Git, Agile, Scrum, Kanban, Jira, Confluence, Slack, Trello, Figma, Sketch, Adobe XD, Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Lightroom, Final Cut Pro, CorelDRAW, AutoCAD, SolidWorks, 3ds Max, Blender, Unreal Engine, Unity, Flutter, React Native, Swift, Kotlin, Objective-C, Java, C#, Python, Ruby, PHP, JavaScript, TypeScript, HTML, CSS, SQL, NoSQL, AWS, Azure, GCP, Docker, Kubernetes, Jenkins, Git, Agile, Scrum, Kanban, Jira, Confluence, Slack, Trello, Figma, Sketch, Adobe XD, Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Lightroom, Final Cut Pro, CorelDRAW, AutoCAD, SolidWorks, 3ds Max, Blender, Unreal Engine, Unity, Flutter, React Native, Swift, Kotlin, Objective-C
  jobRole: z.string().min(1, "Required"), // Software Engineer, Frontend Developer, Backend Developer, Fullstack Developer, Mobile Developer, DevOps, Data Engineer, Data Scientist, Business Analyst, Product Manager, Project Manager, Scrum Master, QA Engineer, UX/UI Designer, Graphic Designer, Marketing, Sales, HR, Finance, Legal, Customer Service, Other
  maxSalary: z.string().min(3, "Required"), // USD, VND
  salaryType: z.string().min(1, "Required"), // USD, VND
  education: z.string().min(1, "Required"), // High School, Bachelor, Master, Doctorate
  experience: z.string().min(1, "Required"), // 0-1 year, 1-2 years, 2-3 years, 3-5 years, 5-7 years, 7-10 years, 10+ years
  jobType: z.string().min(1, "Required"), // Full-time, Part-time, Contract
  expirationDate: z.string().min(1, "Required"),
  jobLevel: z.string().min(1, "Required"), // Intern, Fresher, Junior, Senior, Team Leader, Manager, Director, C-Level
  description: z.string().min(1, "Required"),
  responsibility: z.string().min(1, "Required"),
});

export const postUpdateJob = ({ id, data }: { id: number; data: z.infer<typeof jobSchema> }) => {
  return apiClient.put(`/company/job/${id}`, data);
}

export const useUpdateJob = () => { 

  const { addToast } = useToast();

  return useMutation({
    mutationFn: postUpdateJob,
    onSuccess: (data) => { 
      console.log(data);
      addToast({
        title:"Success",
        message: "Job updated successfully",
        type:"success",
      });
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as ResponseMessage;

      addToast({
        title: "Some thing went wrong",
        message: data.message,
        type: "error",
      });
    },
  })
}