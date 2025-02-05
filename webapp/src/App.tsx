import { TrpcProvider } from './lib/trpc'
import { AllIdeasPage } from './pages/AllIdeasPage'

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
