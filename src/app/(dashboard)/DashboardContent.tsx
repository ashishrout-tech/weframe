import { Done } from './Done';
import InProgress from './InProgress';
import Revised from './Revised';
import TodoList from './TodoList';

const DashboardContent = () => {
  return (
    <div className=" flex-col md:flex-row w-fit flex gap-[1.87rem] md:flex-wrap md:justify-around font-cairo">
      <TodoList />
      <InProgress />
      <Done />
      <Revised />
    </div>
  );
};

export default DashboardContent;
