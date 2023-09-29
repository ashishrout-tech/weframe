import { Done } from './Done';
import InProgress from './InProgress';
import Revised from './Revised';
import TodoList from './TodoList';

const DashboardContent = () => {
  return (
    <div className=" flex gap-[1.87rem] flex-wrap font-cairo">
      <TodoList />
      <InProgress />
      <Done />
      <Revised />
    </div>
  );
};

export default DashboardContent;
