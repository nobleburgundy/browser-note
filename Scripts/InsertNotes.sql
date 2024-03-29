
DROP DATABASE IF Exists NotesDb;
DROP DATABASE IF Exists NoteDb;
USE BrowserNoteDb;
DELETE From Notes;

-- GO
-- CREATE FUNCTION random_int ()
-- RETURNS INT AS
-- BEGIN
--     DECLARE @return_value INT;
--     SET @return_value = FLOOR(RAND()*(10000-1+1))+1;
--     RETURN @return_Value;
-- END;
-- GO
-- Insert Into Users
--     (FirstName, LastName, CreatedDate, UpdatedDate)
-- VALUES
--     ('Gerry', 'Smith', GETDATE(), GETDATE()),
--     ('Tony', 'Jones', GETDATE(), GETDATE()),
--     ('Jackson', 'Hendrix', GETDATE(), GETDATE()),
--     ('Blarney ', 'Sexton', GETDATE(), GETDATE()),
--     ('Mary', 'Page', GETDATE(), GETDATE()),
--     ('Kelly', 'Smyth', GETDATE(), GETDATE());

Insert Into Notes
    (Title, Text, UserId, CreatedDate, UpdatedDate)
Values
    ( 'Test Note ' + STR(RAND(),10, 10), 'more testin less guessin ' + TRIM(STR(RAND(),20, 20)), 1, GETDATE(), GETDATE()),
    ( 'Test Note ' + STR(RAND(),10, 10), 'more testin less guessin ' + TRIM(STR(RAND(),20, 20)), 1, GETDATE(), GETDATE()),
    ( 'Test Note ' + STR(RAND(),10, 10), 'more testin less guessin ' + TRIM(STR(RAND(),20, 20)), 1, GETDATE(), GETDATE()),
    ( 'Test Note ' + STR(RAND(),10, 10), 'more testin less guessin ' + TRIM(STR(RAND(),20, 20)), 1, GETDATE(), GETDATE()),
    ( 'Test Note ' + STR(RAND(),10, 10), 'more testin less guessin ' + TRIM(STR(RAND(),20, 20)), 1, GETDATE(), GETDATE()),
    ( 'Test Note ' + STR(RAND(),10, 10), 'more testin less guessin ' + TRIM(STR(RAND(),20, 20)), 1, GETDATE(), GETDATE()),
    ( 'Test Note ' + STR(RAND(),10, 10), 'more testin less guessin ' + TRIM(STR(RAND(),20, 20)), 1, GETDATE(), GETDATE()),
    ( 'Test Note ' + STR(RAND(),10, 10), 'more testin less guessin ' + TRIM(STR(RAND(),20, 20)), 2, GETDATE(), GETDATE()),
    ( 'Test Note ' + STR(RAND(),10, 10), 'more testin less guessin ' + TRIM(STR(RAND(),20, 20)), 3, GETDATE(), GETDATE()),
    ( 'Test Note ' + STR(RAND(),10, 10), 'more testin less guessin ' + TRIM(STR(RAND(),20, 20)), 4, GETDATE(), GETDATE()),
    ( 'Test Note ' + STR(RAND(),10, 10), 'more testin less guessin ' + TRIM(STR(RAND(),20, 20)), 4, GETDATE(), GETDATE()),
    ( 'Test Note ' + STR(RAND(),10, 10), 'more testin less guessin ' + TRIM(STR(RAND(),20, 20)), 4, GETDATE(), GETDATE()),
    ( 'Test Note ' + STR(RAND(),10, 10), 'more testin less guessin ' + TRIM(STR(RAND(),20, 20)), 5, GETDATE(), GETDATE()),
    ( 'Test Note ' + STR(RAND(),10, 10), 'more testin less guessin ' + TRIM(STR(RAND(),20, 20)), 5, GETDATE(), GETDATE()),
    ( 'Test Note ' + STR(RAND(),10, 10), 'more testin less guessin ' + TRIM(STR(RAND(),20, 20)), 5, GETDATE(), GETDATE());

Select
    *
From Notes Inner Join Users On Notes.UserId = Users.Id;

Select *
From Users;

Select *
From Notes;