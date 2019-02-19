namespace MovieTutorial.MovieDB {
    export interface GenreRow {
        GenreId?: number;
        Name?: string;
    }

    export namespace GenreRow {
        export const idProperty = 'GenreId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'MovieDB.Genre';

        export declare const enum Fields {
            GenreId = "GenreId",
            Name = "Name"
        }
    }
}

