﻿namespace MovieTutorial.MovieDB {
    export interface MovieForm {
        Title: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Storyline: Serenity.TextAreaEditor;
        Year: Serenity.IntegerEditor;
        ReleaseDate: Serenity.DateEditor;
        Runtime: Serenity.IntegerEditor;
        GenreId: Serenity.IntegerEditor;
        Kind: Serenity.EnumEditor;
    }

    export class MovieForm extends Serenity.PrefixedContext {
        static formKey = 'MovieDB.Movie';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MovieForm.init)  {
                MovieForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DateEditor;
                var w4 = s.EnumEditor;

                Q.initFormType(MovieForm, [
                    'Title', w0,
                    'Description', w1,
                    'Storyline', w1,
                    'Year', w2,
                    'ReleaseDate', w3,
                    'Runtime', w2,
                    'GenreId', w2,
                    'Kind', w4
                ]);
            }
        }
    }
}

