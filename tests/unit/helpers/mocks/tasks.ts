import type { Task } from '../../../../src/entities/task'

export const tasksList: Record<number, Task[]> = {
  1: [
    {
      id: 1,
      title: 'Id labore ex et quam laborum',
      projectId: 1,
      description:
        'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
      status: 'in-progress',
      priority: 'low',
      dueDate: new Date(),
    },
    {
      id: 2,
      title: 'Quo vero reiciendis velit similique earum',
      projectId: 1,
      description:
        'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
      status: 'in-progress',
      priority: 'medium',
      dueDate: new Date(),
    },
    {
      id: 3,
      title: 'Odio adipisci rerum aut animi',
      projectId: 1,
      description:
        'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
      status: 'in-progress',
      priority: 'high',
      dueDate: new Date(),
    },
    {
      id: 4,
      title: 'Alias odio sit',
      projectId: 1,
      description:
        'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
      status: 'pending',
      priority: 'low',
      dueDate: new Date(),
    },
    {
      id: 5,
      title: 'Vero eaque aliquid doloribus et culpa',
      projectId: 1,
      description:
        'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
      status: 'in-progress',
      priority: 'medium',
      dueDate: new Date(),
    },
  ],
}
