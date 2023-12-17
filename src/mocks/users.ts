import { UserRole } from 'admin/utils/enums';
import { User } from './../utils/types/index';

export const UsersData: User[] = [
  { id: '0', email: 'jamil@realkeyper.com', name: 'Jamil', number: '+962796208286', role: [UserRole.Admin] },
  { id: '1', email: 'omar@realkeyper.com', name: 'Omar', number: '+962796208255', role: [UserRole.Admin] },
  { id: '2', email: 'walid@realkeyper.com', name: 'Walid', number: '+962796208244', role: [UserRole.Admin] },
  { id: '3', email: 'khalid@realkeyper.com', name: 'Khalid', number: '+962796208219', role: [UserRole.Admin] },
];