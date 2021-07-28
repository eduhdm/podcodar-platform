import { activityRepository } from '../persistence/repositories'

const toggleActivityStatus: any = async (activityId: number) => {
  const activity = await activityRepository.getActivityById(activityId)
  activity.done = !activity.done
  activity.save()
}

export { toggleActivityStatus }
