Ext.define('MyApp230111.view.home.MyPaperGrid', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.mypapergrid',
    config: {
        progress: 0
    },

    // progress update 함수 정의
    updateProgress: function (progress) {
        let columns = [
            this.columnList.title,
            this.columnList.count,
            this.columnList.difficulty,
        ];

        // 편집중이면 생성일자, 출제한 문제지는 출제일자
        switch (progress) {
            case 0: {
                columns.push(this.columnList.makingdate);
                break;
            }
            case 1: {
                columns.push(this.columnList.completedate);
                break;
            }
            default: break;
        }

        this.setColumns(columns);
    },
    
    variableHeights: true,

    privates: {
        columnList: {
            title: {
                text: '제목',
                flex: 1,
                dataIndex: 'title',
                align: 'center',
                cell: {
                    align: 'left',
                }
            },
            count: {
                text: '문제수',
                dataIndex: 'count',
                align: 'center',
                groupable: false,
            },
            difficulty: {
                text: '평균난이도',
                dataIndex: 'difficulty',
                align: 'center',
                groupable: false,
            },
            makingdate: {
                text: '생성일자',
                dataIndex: 'makingdate',
                formatter: 'date("Y.m.d")',
                align: 'center',
                groupable: false,
    
            },
            completedate: {
                text: '출제일자',
                dataIndex: 'completedate',
                formatter: 'date("Y.m.d")',
                align: 'center',
                groupable: false,
    
            },
        }
    }
    
})