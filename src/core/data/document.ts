import {DocumentSection} from '../models/document/document.model';

export const documentDataFake: DocumentSection[] = [
    {
        title:  'Các dự án trọng điểm nhóm A',
        documents: [
            {
                id: 1,
                documentNumber: '282-TTr/BCSD' ,
                date: '03/07/2020',
                department: 'Ban cán sự Đảng Ủy, ban Nhân dân thành phố',
                title: 'Tờ trình về tổng kết thực hiện nhiệm vụ kinh tế - xã hội 5 năm (2015-2020); phương hướng, mục tiêu, nhiệm vụ, giải pháp 5 năm (2021-2025) ',
                url: 'abc',
            },
            {
                id: 2,
                documentNumber: '280-TTr/BCSD' ,
                date: '05/07/2020',
                department: 'Ban cán sự Đảng Ủy ban Nhân dân thành phố',
                title: 'Tờ trình về tình hình kinh tế - văn hoá - xã hội, quốc phòng - an ninh, thu chi ngân sách của thành phố 6 tháng đầu năm phương hướng nhiệm vụ trọng tâm 6 tháng cuối năm 2020.',
                url: 'abc',
            },
        ],
    },
];
