# RoutesV3AlertRuleListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlertRules** | Pointer to [**[]RoutesV3AlertRuleWithMetadata**](RoutesV3AlertRuleWithMetadata.md) |  | [optional] 
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Methods

### NewRoutesV3AlertRuleListResponse

`func NewRoutesV3AlertRuleListResponse() *RoutesV3AlertRuleListResponse`

NewRoutesV3AlertRuleListResponse instantiates a new RoutesV3AlertRuleListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3AlertRuleListResponseWithDefaults

`func NewRoutesV3AlertRuleListResponseWithDefaults() *RoutesV3AlertRuleListResponse`

NewRoutesV3AlertRuleListResponseWithDefaults instantiates a new RoutesV3AlertRuleListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlertRules

`func (o *RoutesV3AlertRuleListResponse) GetAlertRules() []RoutesV3AlertRuleWithMetadata`

GetAlertRules returns the AlertRules field if non-nil, zero value otherwise.

### GetAlertRulesOk

`func (o *RoutesV3AlertRuleListResponse) GetAlertRulesOk() (*[]RoutesV3AlertRuleWithMetadata, bool)`

GetAlertRulesOk returns a tuple with the AlertRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertRules

`func (o *RoutesV3AlertRuleListResponse) SetAlertRules(v []RoutesV3AlertRuleWithMetadata)`

SetAlertRules sets AlertRules field to given value.

### HasAlertRules

`func (o *RoutesV3AlertRuleListResponse) HasAlertRules() bool`

HasAlertRules returns a boolean if a field has been set.

### GetPagination

`func (o *RoutesV3AlertRuleListResponse) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *RoutesV3AlertRuleListResponse) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *RoutesV3AlertRuleListResponse) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *RoutesV3AlertRuleListResponse) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


