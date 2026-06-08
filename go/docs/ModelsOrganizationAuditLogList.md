# ModelsOrganizationAuditLogList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Logs** | Pointer to [**[]ModelsOrganizationAuditLog**](ModelsOrganizationAuditLog.md) |  | [optional] 
**Pagination** | Pointer to [**ModelsCursorPagination**](ModelsCursorPagination.md) |  | [optional] 

## Methods

### NewModelsOrganizationAuditLogList

`func NewModelsOrganizationAuditLogList() *ModelsOrganizationAuditLogList`

NewModelsOrganizationAuditLogList instantiates a new ModelsOrganizationAuditLogList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsOrganizationAuditLogListWithDefaults

`func NewModelsOrganizationAuditLogListWithDefaults() *ModelsOrganizationAuditLogList`

NewModelsOrganizationAuditLogListWithDefaults instantiates a new ModelsOrganizationAuditLogList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLogs

`func (o *ModelsOrganizationAuditLogList) GetLogs() []ModelsOrganizationAuditLog`

GetLogs returns the Logs field if non-nil, zero value otherwise.

### GetLogsOk

`func (o *ModelsOrganizationAuditLogList) GetLogsOk() (*[]ModelsOrganizationAuditLog, bool)`

GetLogsOk returns a tuple with the Logs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogs

`func (o *ModelsOrganizationAuditLogList) SetLogs(v []ModelsOrganizationAuditLog)`

SetLogs sets Logs field to given value.

### HasLogs

`func (o *ModelsOrganizationAuditLogList) HasLogs() bool`

HasLogs returns a boolean if a field has been set.

### GetPagination

`func (o *ModelsOrganizationAuditLogList) GetPagination() ModelsCursorPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsOrganizationAuditLogList) GetPaginationOk() (*ModelsCursorPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsOrganizationAuditLogList) SetPagination(v ModelsCursorPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsOrganizationAuditLogList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


