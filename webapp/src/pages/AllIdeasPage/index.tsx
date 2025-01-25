import { trpc } from '../../lib/trpc'

export const AllIdeasPage = () => {
  const result = trpc.getIdeas.useQuery()
  console.log(result)
  return null    
    // return (
    //   <div>
    //     <h1>Ideanick</h1>
    //     {ideas.map((idea) => (
    //       <div key={idea.nick}>
    //         <h2>{idea.name}</h2>
    //         <p>{idea.description}</p>
    //       </div>
    //     ))}
    //   </div>
    // )
  }