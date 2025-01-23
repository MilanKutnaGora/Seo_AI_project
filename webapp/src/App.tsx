import { TrpcProvider } from "./lib/trpc"

export const AllIdeasPage = () => {
  const ideas = [
    {
      nick: 'cool-idea-nick-1',
      name: 'Idea 1',
      description: 'Description of idea 1...',
    },
    {
      nick: 'cool-idea-nick-2',
      name: 'Idea 2',
      description: 'Description of idea 2...',
    },
    {
      nick: 'cool-idea-nick-3',
      name: 'Idea 3',
      description: 'Description of idea 3...',
    },
    {
      nick: 'cool-idea-nick-4',
      name: 'Idea 4',
      description: 'Description of idea 4...',
    },
    {
      nick: 'cool-idea-nick-5',
      name: 'Idea 5',
      description: 'Description of idea 5...',
    },
  ]
  return (
    <div>
      <h1>Ideanick</h1>
      {ideas.map((idea) => (
        <div key={idea.nick}>
          <h2>{idea.name}</h2>
          <p>{idea.description}</p>
        </div>
      ))}
    </div>
  )
}

export const App = () => {
  return (
    <TrpcProvider>
      <AllIdeasPage />
    </TrpcProvider>
  )
}


// return (
//   <div>
//     <h1>SEO Product</h1>
//     <div>
//       <div>
//         <h2>Генерация контента</h2>
//         <p>Ввод ключевых слов и параметров</p>
//       </div>
//       <div>
//         <h2>Визуальный редактор текста</h2>
//         <p>Редактор текста</p>
//       </div>
//       <div>
//         <h2>Личный кабинет</h2>
//         <p>Отображение проектов пользователя</p>
//       </div>
//       <div>
//         <h2>Интеграция с платформами</h2>
//         <p>Публикации в Tilda</p>
//       </div>
//     </div>
//   </div>
// )
