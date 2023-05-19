import Vignette from '@app/vignette/[id]/page';
import Modal from '@components/Modal/Modal';

interface IVignetteModalProps {
  params: {
    id: string;
  };
}

const VignetteModal = ({params}: IVignetteModalProps) => {
  
  return (
    <Modal>
      <Vignette params={params} />
    </Modal>
  );
};

export default VignetteModal;
