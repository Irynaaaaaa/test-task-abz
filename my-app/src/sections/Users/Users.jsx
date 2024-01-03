import { useInfiniteQuery } from 'react-query'
import { getUsers } from '../../api'
import User from './UserCard'
import Button from '../../components/Button/Button'

const Users = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['users'],
    queryFn: ({ pageParam = 1 }) => getUsers(pageParam),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.total_pages > allPages.length ? allPages.length + 1 : undefined,
  })

  if (isLoading) return <span>Loading...</span>

  const users = data?.pages.flatMap(({ users }) => users) || []

  return (
    <section className="common-section-styles users-section" id="users_section">
      <h2>Working with GET request</h2>
      <ul className="users-container">
        {users.map(({ id, ...userData }) => (
          <User key={id} userData={userData} />
        ))}
      </ul>
      <Button
        title="Show more"
        onClick={fetchNextPage}
        disabled={!hasNextPage}
      />
    </section>
  )
}

export default Users
