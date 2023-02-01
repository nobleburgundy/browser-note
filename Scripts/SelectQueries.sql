USE BrowserNoteDb;

Select
    *
From Notes Inner Join Users On Notes.UserId = Users.Id;

Select *
From Users;

Select *
From Notes;