import type { ListDataStoreContentQueryDto } from '@n8n/api-types';
import { GlobalConfig } from '@n8n/config';
import { DataSource, DataSourceOptions, QueryRunner } from '@n8n/typeorm';
import { DataStoreColumnJsType, DataStoreRows, DataStoreRowReturn, DataStoreRowsReturn } from 'n8n-workflow';
import { DataStoreColumn } from './data-store-column.entity';
import { DataStoreUserTableName } from './data-store.types';
export declare class DataStoreRowsRepository {
    private dataSource;
    private readonly globalConfig;
    constructor(dataSource: DataSource, globalConfig: GlobalConfig);
    toTableName(dataStoreId: string): DataStoreUserTableName;
    insertRows<T extends boolean | undefined>(dataStoreId: string, rows: DataStoreRows, columns: DataStoreColumn[], returnData?: T): Promise<Array<T extends true ? DataStoreRowReturn : Pick<DataStoreRowReturn, 'id'>>>;
    updateRow(dataStoreId: string, setData: Record<string, DataStoreColumnJsType | null>, whereData: Record<string, DataStoreColumnJsType | null>, columns: DataStoreColumn[], returnData?: boolean): Promise<true | DataStoreRowReturn[]>;
    upsertRows<T extends boolean | undefined>(dataStoreId: string, matchFields: string[], rows: DataStoreRows, columns: DataStoreColumn[], returnData?: T): Promise<T extends true ? DataStoreRowReturn[] : true>;
    deleteRows(dataStoreId: string, ids: number[]): Promise<boolean>;
    createTableWithColumns(dataStoreId: string, columns: DataStoreColumn[], queryRunner: QueryRunner): Promise<void>;
    dropTable(dataStoreId: string, queryRunner: QueryRunner): Promise<void>;
    addColumn(dataStoreId: string, column: DataStoreColumn, queryRunner: QueryRunner, dbType: DataSourceOptions['type']): Promise<void>;
    dropColumnFromTable(dataStoreId: string, columnName: string, queryRunner: QueryRunner, dbType: DataSourceOptions['type']): Promise<void>;
    getManyAndCount(dataStoreId: string, dto: ListDataStoreContentQueryDto): Promise<{
        count: number;
        data: DataStoreRowsReturn;
    }>;
    getManyByIds(dataStoreId: string, ids: number[], columns: DataStoreColumn[]): Promise<{
        [x: string]: DataStoreColumnJsType;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getRowIds(dataStoreId: string, dto: ListDataStoreContentQueryDto): Promise<number[]>;
    private getManyQuery;
    private applyFilters;
    private applySorting;
    private applySortingByField;
    private applyPagination;
    private fetchAndSplitRowsByExistence;
}
