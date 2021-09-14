import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';

export const sidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Equipos',
        path: '/dashboard/equipos',
        icon: <AiIcons.AiFillDashboard />,
        iconClosed: <FaIcons.FaAngleDown/>,
        iconOpened:  <FaIcons.FaAngleRight/>,
        
        subMenu:[
            {
                title: 'Basicos',
                path: '/dashboard/equipos/basicos',
            },
            {
                title: 'Metrologicos',
                path: '/dashboard/equipos/metrologicos',
            },
            {
                title: 'Complementarios',
                path: '/dashboard/equipos/complementarios',
            },
        ]
    },
    {
        title: 'Patrones',
        path: '/dashboard/patrones',
        icon: <FaIcons.FaGitter />,
        iconClosed: <FaIcons.FaAngleDown/>,
        iconOpened:  <FaIcons.FaAngleRight/>,
        
        subMenu:[
            {
                title: 'Basicos',
                path: '/dashboard/patrones/basicos',
            },
            {
                title: 'Metrologicos',
                path: '/dashboard/patrones/metrologicos',
            },
            {
                title: 'Complementarios',
                path: '/dashboard/patrones/complementarios',
            },
        ]
    },
    {
        title: 'Consultas',
        path: '/dashboard/consultas',
        icon: <IoIcons.IoIosSearch />,
        iconClosed: <FaIcons.FaAngleDown/>,
        iconOpened:  <FaIcons.FaAngleRight/>,
        subMenu:[
            {
                title: 'Equipos',
                path: '/dashboard/consultas/equipos',
            },
            {
                title: 'Patrones',
                path: '/dashboard/consultas/patrones',
            },
        ]
    },
    {
        title: 'Reportes',
        path: '/dashboard/reportes',
        icon: <IoIcons.IoIosPaper />,
    },
    {
        title: 'Configuraciones',
        path: '/dashboard/usuarios',
        icon: <AiIcons.AiFillSetting/>,
        iconClosed: <FaIcons.FaAngleDown/>,
        iconOpened:  <FaIcons.FaAngleRight/>,
        
        subMenu:[
            {
                title: 'Usuarios',
                path: '/dashboard/usuarios',
            },
            {
                title: 'Responsables',
                path: '/dashboard/configuraciones/responsables',
            },
            {
                title: 'Ubicaciones',
                path: '/dashboard/configuraciones/ubicaciones',
            },
            {
                title: 'Unidad De Medida',
                path: '/dashboard/configuraciones/unidad-medida',
            },
            {
                title: 'Magnitud',
                path: '/dashboard/configuraciones/magnitud',
            },
            {
                title: 'Frecuencias',
                path: '/dashboard/configuraciones/frecuencias',
            },
            
        ]
    },
]