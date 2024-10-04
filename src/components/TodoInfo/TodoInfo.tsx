import cn from 'classnames';
import { TodoWithUser } from '../../Types/TodosWithUsers';
import { UserInfo } from '../UserInfo';

interface Props {
  todo: TodoWithUser;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <article
      data-id={todo.id}
      className={cn('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
