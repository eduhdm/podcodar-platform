import { sprintRepository } from '../persistence/repositories'

const toggleSprintStatus: any = async (sprintId: number) => {
  const sprint = await sprintRepository.getSprintById(sprintId)
  sprint.finished = !sprint.finished
  sprint.save()
}

export { toggleSprintStatus }
