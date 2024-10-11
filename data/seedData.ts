export const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Technician' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Technician' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Admin' },
];

export const workOrders = [
  { 
    id: 1, 
    title: 'Fix Printer', 
    description: 'Printer on 2nd floor is not working',
    status: 'Open',
    createdDate: '2023-05-15T10:30:00Z',
    assignedTo: 1
  },
  { 
    id: 2, 
    title: 'Replace Lightbulbs', 
    description: 'Replace all lightbulbs in conference room A',
    status: 'In Progress',
    createdDate: '2023-05-16T09:15:00Z',
    assignedTo: 3
  },
  { 
    id: 3, 
    title: 'Update Software', 
    description: 'Update accounting software on all computers',
    status: 'Completed',
    createdDate: '2023-05-14T14:45:00Z',
    assignedTo: 2
  },
  { 
    id: 4, 
    title: 'Clean Air Vents', 
    description: 'Clean air vents in the entire building',
    status: 'Open',
    createdDate: '2023-05-17T11:00:00Z',
    assignedTo: 1
  },
];