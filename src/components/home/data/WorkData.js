import bookinggo from '../../../assets/images/work/booking.png';
import ict from '../../../assets/images/work/ict.png';
import unibz from '../../../assets/images/work/unibz.jpeg';

export const WorkData = {
    bookinggo: {
        title: 'BookingGo (Rentalcars.com) ~ Manchester',
        subtitle: 'Graduate Software Engineer',
        begin: '2018',
        end: 'present',
        items: [
            'Main technologies used: Java, JavaScript, React, PHP, MySQL, Docker',
            'Everyday development follows the Agile principles, in particular the Kanban approach, including activities like pair programming and testing, code reviews, daily stand-ups an retros',
            'Recently involved in interviewing students who applied for the BookingGo grad scheme',
        ],
        icon: bookinggo,
    },
    unibz: {
        title: 'UniBZ - Faculty of Computer Science',
        subtitle: 'Research Assistant',
        begin: '2017',
        end: '2018',
        items: [
            'Collaboration in writing an article for IEEE about contracts and policies of cloud services, following the ' +
                'changes introduced by the new European law on data protection (GDPR).',
        ],
        icon: unibz,
    },
    ictgroup: {
        title: 'ICT Group ~ Reggio Emilia',
        subtitle: 'Intern - Software Developer',
        begin: '2016',
        end: '2017',
        items: [
            "Development of a web portal for the request and management of the employees' holidays and permits.",
            'Main technologies: HTML, CSS, Javascript, AngularJS, JQuery, NodeJS, Java, MongoDB, Wildfly',
        ],
        icon: ict,
    },
};

export default WorkData;