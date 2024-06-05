using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DIPS.Db
{
    public class StoredProcedures
    {
        public enum dipUsers
        {
            usp_dipUser_GetUserBySID,
            usp_dipUser_Insert,
            usp_dipUser_SelectAll,
            usp_dipUser_SelectById,
            usp_dipUser_Update,
            usp_dipUser_PagePermissions
        }
        public enum sysRoles
        {
            usp_sysRoles_GetAllRoles,
            usp_sysRoles_GetRolesById,
            usp_sysRoles_InsertRole
        }

        public enum sysUserRoles
        {
            usp_sysUserRoles_Insert,
            usp_sysUserRoles_Delete,
            usp_sysUserRoles_Select
        }

        public enum sysPageInRole
        {
            usp_sysPageInRole_Select,
            usp_sysPageInRole_SelectById,
            usp_sysPageInRole_Delete,
            spINSERT_sysPageInRole
        }

        public enum sysPages
        {
            spUPDATE_sysPages,
            spINSERT_sysPages,
            spREAD_sysPages,
            spREAD_sysPagesById
        }

        public enum sysSections
        {
            spREAD_sysSections,
            spINSERT_sysSections,
            spUPDATE_sysSections,
            usp_sysSections_GetSectionById
        }

        public enum SysLeftMenu
        {
            spREAD_sysPages_BuildMenu
        }

        public enum DipRefundRate
        {
            usp_dipRefundRate_SelectAll,
            usp_dipRefundRate_SelectById,
            usp_dipRefundRate_Update,
            usp_dipRefundRate_SelectByFuelId
        }

        public enum dipClaim
        {
            usp_dipClaim_SelectChequeNo,
            usp_dipClaim_Delete,
            usp_dipClaim_ReadById,
            usp_dipClaim_Insert,
            usp_dipClaim_Update,
            usp_dipClaim_ReadAllClaims,
            usp_dipClaim_ReadBClaimIdOrGroupId,
            usp_DipClaimProcessedSuperVisor,
            usp_DipClaimProcessedDataCaptures,
            usp_dipClaim_ReadBClaimByGroupOrVehicleRef,
            usp_dipClaim_UpdateClaimStatus,
            usp_dipClaim_ReadByStatusID,
            usp_dipClaim_Report_ByStatusId,
            usp_DipClaimProcessedForBookkeeping,
            usp_dipClaim_Report_GroupTotals,
            usp_dipClaimGroup_Update,
            usp_dipClaim_SelectByChequeNum,
            usp_dipClaim_UpdateGroupwithPaymentParticulars,
            usp_dipClaim_InsertClaimChequeChangeReason,
            usp_dipClaim_ReadByChequeNumber,
            usp_dipClaim_SelectByGroupId,
            usp_dipClaim_UpdateWithCheque,
            usp_dipClaim_GetTotalLiters,
            usp_dipClaim_DeleteById,
            usp_dipClaim_SAP_Report_ByStatusId,
            usp_dipClaim_SAP_Report_GetByClientId,
            usp_dipClaim_SAP_Report_AllocateBillingRefNo,
            usp_dipClaim_SAP_Report_FinaliseByClientId,
            usp_dipClaim_FinalisedClaims
        }

        public enum DIPVehicle
        {
            //New Stored Proc
            usp_dipVehicle_ALLByClient,
            usp_dipVehicle_SearchByClient,
            usp_dipVehicle_VehicleById,
            usp_CheckDuplicateVehicle, 

                //Older
            usp_dipVehicle_SelectAllVehicles,
            usp_dipVehicle_SelectById,
            usp_dipVehicle_Search,
            usp_dipVehicle_Insert,
            usp_dipVehicle_Update,
            usp_dipVehicle_SearchByClientId,
            usp_dipVehicle_Delete,
            usp_dipVehicle_SearchByOwnerId
        }

        public enum dipClient
        {
            usp_dipClient_GetClientByCodeOrName,
            usp_dipClient_selectAll,
            usp_dipClient_Insert,
            usp_dipClient_Update,
            usp_dipClient_Search,
            usp_dipClient_SelectById,
            usp_dipClient_Delete,
            usp_dipVehicle_SearchByIdOrNameOrReg
        }
        public enum dipFiles
        {
            dipFileUpload_Insert,
            dipFileUpload_Select
        }
        public enum dipLookupFuelType
        {
            usp_dipLookupFuelType_All,
        }


        public enum dipLookupClientType
        {
            usp_dipLookupClientType_SelectAll,
            usp_diplookupClientType_Update,
            usp_dipClientTypeLookup_Insert,
            usp_diplookupClientType_SelectById,
            usp_dipLookupClientType_SelectAllTypes
        }
        public enum dipLookupNationality
        {
            usp_dipNationalityLookup_SelectById,
            usp_dipLookupNationality_SelectAll,
            usp_dipNationailityLookupType_SelectAll,
            usp_diplookupNationality_Update,
            usp_dipNationalityLookup_Insert,
            usp_dipLookupNationality_Search,
            usp_dipLookupNationality_SelectAllTypes
        }

        public enum DipLookupTitle
        {
            usp_dipLookupTitle_SelectAll,
            usp_dipLookupTitle_Update,
            usp_dipLookupTitle_SelectById,
            usp_dipLookupTitle_Insert,
            usp_dipLookupTitleType_Search,
            usp_dipLookupTitle_SelectAllTypes
        }

        public enum DipOwner
        {
            usp_dipOwner_SelectById,
            usp_dipOwner_SelectAll,
            usp_dipOwner_SelectBySurnameOrPassport,
            usp_dipOwner_Delete,
            usp_dipOwner_Insert,
            usp_dipOwner_Update,
            usp_dipOwner_NotLinkedToVehicles,
            usp_dipOwner_LinkedToVehicles,
            usp_dipLookupRank_SelectByAllOwner,
            usp_dipOwner_SelectByClientId
        }

        public enum DipLookupRefundType

        {
            usp_dipLookupRefundType_SelectAll,
            usp_dipLookupRefundType_Update,
            usp_dipLookupRefundType_SelectById,
            usp_dipLookupRefundType_Insert,
            usp_dipLookupRefundType_SelectAllTypes

        }
        public enum DipLookupRank
        {
            usp_dipLookupRank_SelectByAll,
            usp_dipLookupRank_Update,
            usp_dipLookupRank_SelectById,
            usp_dipLookupRank_Insert,
            usp_dipLookupRank_Search
        }

        public enum DipLookupStatus
        {
            usp_dipLookupStatus_SelectAll,
            usp_dipLookupStatus_Update,
            usp_dipLookupStatus_SelectById,
            usp_dipLookupStatus_Insert

        }

        public enum dipCessionary
        {
            usp_dipCessionaries_selectAll,
            usp_dipCessionry_SelectCessionaryById,
            usp_dipCessionary_SelectCessionaryByName,
            usp_dipCessionary_Update,
            usp_dipCessionary_insert,
            usp_dipCessionaries_Search,
            usp_dipCessionary_Delete
        }
        public enum DipStatusReason
        {
            usp_dipStatusReason_Insert
        }
        public enum DipGroup
        {
            usp_dipGroup_Insert,
            usp_dipGroup_Update,
            usp_dipGroup_SelectById,
            usp_dipGroup_Delete,
            usp_dipLookupStatus_SelectById,
            usp_dipGroup_SendToSupervisor,
            usp_dipGroup_SendBackToDataCapturer,
            usp_dipGroup_UpdateStatus,
            usp_dipGroup_SelectNotProcessed,
            usp_dipGroup_SendAllToSupervisor
        }
        public enum DipInvoice
        {
            usp_dipInvoice_Read,
            usp_dipInvoice_Insert,
            usp_dipInvoice_Update,
            usp_dipInvoice_Delete,
            usp_dipInvoice_ReadByClaimId,
            usp_dipInvoice_DeleteByClaimId,
            usp_dipInvoice_UpdateStatus,
            usp_dipInvoice_Validate,
        }
        public enum UpdateGroupCheque
        {
            usp_dipClaim_SelectByChequeNum,
            usp_dipClaim_UpdateGroupwithPaymentParticulars
        }
        public enum DipFile
        {
            usp_dipFile_NextSeqNumber,
            usp_dipFile_INSERT
        }

        public enum Sys_Reports
        {
            usp_sysReports_SelectById,
            usp_sysReports_AllSections
        }
        public enum SystemSettings
        {
            usp_dipSystemSettings_Update,
            usp_dipSystemSettings_Read
        }

        public enum DipProtocol
        {
            usp_dipProtocol_Read,
            usp_dipProtocol_Insert
        }

        public enum DipBokDipsFile
        {
            usp_DipBokDipsFile_Insert,
            usp_DipBokDipsFile_Read,
            usp_DipBokDipsFile_Update,
            usp_DipBokDipsFile_UpdateStatus,
            usp_DipBokDipsFile_SELECT,
            usp_DipBokDipsFile_SELECT_ByFileName,
            // usp_DipBokDipsFile_SELECTAllNotPrinted,
            usp_DipBokDipsFile_CheckForNewFiles
        }
    }
}