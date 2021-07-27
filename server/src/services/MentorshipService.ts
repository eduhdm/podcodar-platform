import { mentorshipRepository } from '../persistence/repositories'

const acceptMentorship: any = async (mentorshipId: number) => {
  const mentorship = await mentorshipRepository.getMentorshipById(mentorshipId)
  mentorship.accepted = true
  const start = new Date()
  const end = new Date().setDate(start.getDate() + mentorship.days_duration)
  mentorship.start_date = start
  mentorship.end_date = new Date(end)
  mentorship.save()
}

export { acceptMentorship }
