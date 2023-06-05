const navigationConfig = [
  // {
    // id: 'contacts',
    // title: 'CONTACTOS',
    // type: 'item',
    // icon: 'account_box',
    // url: 'apps/contacts/all',
  // },
  {
    id: 'zonificacion',
    title: 'ZONIFICACIÓN',
    type: 'collapse',
    icon: 'view_quilt',
    children: []
  },
  {
    id: 'frecuencias',
    title: 'FRECUENCIAS',
    type: 'collapse',
    icon: 'date_range',
    children: []
  },
  {
    id: 'vrp',
    title: 'VRP',
    type: 'collapse',
    icon: 'alt_route',
    children: []
  },
  {
    id: 'digitalizador',
    title: 'DIGITALIZADOR',
    type: 'collapse',
    icon: 'edit',
    children: []
  },
  {
    id: 'administracion',
    title: 'ADMINISTRACIÓN',
    type: 'collapse',
    icon: 'construction',
    children: [
      {
        id: 'usuarios',
        title: 'Usuarios',
        type: 'item',
        icon: 'supervisor_account',
        url: 'apps/contacts/all',
      },
      {
        id: 'proyectos',
        title: 'Proyectos',
        type: 'item',
        icon: 'folder',
        url: 'administracion/proyectos',
      },
      {
        id: 'cartografia',
        title: 'Cartografía',
        type: 'item',
        icon: 'map_rounded',
        url: 'administracion/carto',
      },
    ],
  },
];

export default navigationConfig;
