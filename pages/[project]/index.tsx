import { useRouter } from 'next/router'
import Container from "../../components/Container"
const Project = () => {
  const router = useRouter()
  const { project } = router.query
  return (
    <Container>
      <p>Project: {project}</p>
    </Container>
  )
}

export default Project