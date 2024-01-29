Ext.define('MyApp230111.view.home.MyDbGrid', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.mydbgrid',
    config: {
        progress: -1
    },

    updateProgress: function (progress) {
        let columns;

        switch (progress) {
            case -1: {
                columns = [
                    this.columnList.title,
                    this.columnList.rejectedReason,
                    this.columnList.upload,
                    this.columnList.delete,
                    this.columnList.updatedAt
                ];
                break;
            }
            case 0: { 
                columns = [
                    this.columnList.type,
                    this.columnList.title,
                    this.columnList.updatedAt
                ];
                break;
            }
            case 1: 
            case 3: {
                columns = [
                    this.columnList.checkbox,
                    this.columnList.type,
                    this.columnList.title,
                    this.columnList.question,
                    this.columnList.explanation,
                    this.columnList.quickanswer,
                    this.columnList.averageDifficulty,
                    this.columnList.updatedAt
                ];
                break;
            }
            case 2: {
                columns = [
                    this.columnList.type,
                    this.columnList.title,
                    this.columnList.question,
                    this.columnList.explanation,
                    this.columnList.quickanswer,
                    this.columnList.averageDifficulty,
                    this.columnList.updatedAt
                ];
                break;
            }
            case 4: { 
                columns = [
                    this.columnList.type,
                    this.columnList.title,
                    this.columnList.question,
                    this.columnList.explanation,
                    this.columnList.quickanswer,
                    this.columnList.averageDifficulty,
                    this.columnList.updatedAt
                ];
                break;
            }
            case 5: { 
                columns = [
                    this.columnList.title,
                    this.columnList.question,
                    this.columnList.explanation,
                    this.columnList.averageDifficulty,
                    this.columnList.createdAt
                ];
                break;
            }
            default: break;
        }

        this.setColumns(columns);
    },

    variablHeights: true,

    privates: {
        columnList: {
            checkbox: {
                xtype: 'checkcolumn',
                headerCheckbox: true,
                menuDisabled: true,
                dataIndex: 'checked',
                width: 40
            },
            title: {
                text: '이름',
                dataIndex: 'title',
                flex: 2,
                minwidth: 200,
                align: 'center',
                cell: {
                    align: 'left',
                },
                userCls: 'title'
            },
            rejectedReason: {
                text: '반려사유',
                dataIndex: 'rejectComment',
                flex: 3,
                align: 'center'
            },
            upload: {
                text: '새로 업로드',
                align: 'center',
                cell: {
                    xtype: 'widgetcell',
                    widget: {
                        xtype: 'button',
                        text: '업로드',
                        width: 76,
                    }
                }
            },
            delete: {
                text: '삭제 및 확인',
                align: 'center',
                cell: {
                    xtype: 'widgetcell',
                    widget: {
                        xtype: 'button',
                        text: '삭제',
                        width: 76
                    }
                }
            },
            type: {
                text: '구분',
                dataIndex: 'source',
                renderer: data => data ? data.sourceTypeName : '분석중',
                align: 'center',
                width: 86
            },
            question: {
                text: '문제수<br/>(구매/전체)',
                dataIndex: 'paidQuestionCount',
                renderer: (value, record) => record.get('paidQuestionCount') + '/' + record.get('questionCount'),
                align: 'center',
                groupable: false,
                width: 102
            },
            explanation: {
                text: '해설수<br/>(구매/전체)',
                dataIndex: 'paidExplanationCount',
                renderer: (value, record) => record.get('paidExplanationCount') + '/' + record.get('explanationCount'),
                align: 'center'
            },
            quickanswer: {
                text: '빠른<br/>정답',
                dataIndex: 'isQuickAnswers',
                renderer: value => value == true ? 'O' : 'X',
                align: 'center',
                width: 66
            },
            averageDifficulty: {
                text: '평균<br/>난이도',
                dataIndex: 'averageDifficulty',
                formatter: 'number("0.00")',
                align: 'center',
                groupable: false,
                width: 84
            },
            updatedAt: {
                text: '변경일자',
                dataIndex: 'updatedAt',
                formatter: 'date("Y.m.d")',
                align: 'center',
                groupable: false
            },
            createdAt: {
                text: '생성일자',
                dataIndex: 'createdAt',
                formatter: 'date("Y.m.d")',
                align: 'center',
                groupable: false
            }
        }
    }
})