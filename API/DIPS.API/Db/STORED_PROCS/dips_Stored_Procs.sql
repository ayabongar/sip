


--==================================================================
-- Check for Duplicate Vehicle, return true or false
--==================================================================


USE [DIPS]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE usp_dipCheckDuplicateVehicle
    @VehicleRegistration NVARCHAR(50),
    @VehicleID INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT CASE 
        WHEN EXISTS (
            SELECT 1
            FROM dipVehicle
            WHERE VehicleRegistration = @VehicleRegistration
               OR VehicleID = @VehicleID
        )
        THEN CAST(1 AS BIT)
        ELSE CAST(0 AS BIT)
    END AS IsDuplicate;
END;

--==================================================================
