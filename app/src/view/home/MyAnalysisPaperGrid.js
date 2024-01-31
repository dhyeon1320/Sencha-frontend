Ext.define('MyApp230111.view.home.MyAnalysisPaperGrid', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.myanalysispapergrid',
    config: {
        progress: 0
    },

    updateProgress: function (progress) {
        // 공통으로 들어갈 column 미리 작성
        let columns = [
            this.columnList.title,
            this.columnList.standardQuestionCount,
            this.columnList.analyseQuestionCount,
        ];

        switch (progress) {
            case 0: {
                columns.push(this.columnList.createdAt);
                break;
            }
            case 1: {
                columns.push(this.columnList.completedAt);
                break;
            }
            default: break;
        }

        this.setColumns(columns);
    },

    privates: {
        columnList: {
            title: {
                text: '제목',
                dataIndex: 'title',
                flex: 1,
                align: 'center',
                cell : {
                    align: 'left',
                }
            },
            standardQuestionCount: {
                text: '기준문제수',
                dataIndex: 'standardCount',
                align: 'center',
                groupable: false
            },
            analyseQuestionCount: {
                text: '분석문제수',
                dataIndex: 'analysisCount',
                align: 'center',
                groupable: false
            },
            createdAt: {
                text: '생성일자',
                dataIndex: 'createdAt',
                formatter: 'date("Y.m.d")',
                align: 'center',
                groupable: false
            },
            completedAt: {
                text: '완료일자',
                dataIndex: 'completedAt',
                formatter: 'date("Y.m.d")',
                align: 'center',
                groupable: false
            }
        }
    }
})