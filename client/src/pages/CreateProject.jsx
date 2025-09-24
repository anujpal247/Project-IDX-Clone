import { useCreateProject } from "../hooks/apis/mutations/useCreateProject"
import { Button, Layout } from "antd";
export default function CreateProject() {
  // Call the mutation function here
  const { createProjectMutation, isPending, isSuccess, error} = useCreateProject();
  const { Header, Footer, Sider, Content } = Layout;

  async function handleCreateProject() {
    try {
      const result = await createProjectMutation();
      console.log("Project created successfully:", result);
      console.log("Now we should redirect to editor ");
    } catch (err) {
      console.error("Error creating project:", err);
    }
  }

  return (
    <Layout style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Header style={{ textAlign: 'center', color: 'white', fontSize: '24px' }}>Create a New Project</Header>
      <Content style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '20px' }}>Create a new project to get started</h1>
        <p style={{ marginBottom: '20px' }}>Choose a name for your project and start coding!</p>

        <Button type="primary" onClick={handleCreateProject} loading={isPending}>
          {isPending ? 'Creating...' : 'Create Project'}
        </Button>
        {isSuccess && <p style={{ color: 'green', marginTop: '10px' }}>Project created successfully!</p>}
        {error && <p style={{ color: 'red', marginTop: '10px' }}>Error creating project: {error.message}</p>}
      </Content>
      <Footer style={{ textAlign: 'center' }}>ProjectIDX ©2024 Created by ❤️</Footer>
      
    </Layout>
  )
}