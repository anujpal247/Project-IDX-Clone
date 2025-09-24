import { useMutation } from "@tanstack/react-query"
import { createProjectApi } from "../../../apis/project"


export const useCreateProject = () => {
  const { mutateAsync, isPending, isSuccess, error } = useMutation({
    mutationFn: createProjectApi,
    mutationKey: ['create-project'],
    onSuccess: (data) => {
      console.log("api response", data);
    },
    onError: (error) => {
      console.log("api error", error);
    }
  })

  return { 
    createProjectMutation: mutateAsync, 
    isPending, 
    isSuccess, 
    error
  };
}