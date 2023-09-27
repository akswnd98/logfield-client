import OwlNotifier from '@/webowl/OwlNotifier';

export type CreateNodeNotificationType = {
  title: string;
  id: number;
};

export default class CreateNodeNotifier extends OwlNotifier<CreateNodeNotificationType> {
  
}
