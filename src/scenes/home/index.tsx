import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
      {/* Image + header */}
      Home
    </section>
  );
};

export default Home;
