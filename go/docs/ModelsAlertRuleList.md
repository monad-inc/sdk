# ModelsAlertRuleList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlertRules** | Pointer to [**[]ModelsAlertRule**](ModelsAlertRule.md) |  | [optional] 
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Methods

### NewModelsAlertRuleList

`func NewModelsAlertRuleList() *ModelsAlertRuleList`

NewModelsAlertRuleList instantiates a new ModelsAlertRuleList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsAlertRuleListWithDefaults

`func NewModelsAlertRuleListWithDefaults() *ModelsAlertRuleList`

NewModelsAlertRuleListWithDefaults instantiates a new ModelsAlertRuleList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlertRules

`func (o *ModelsAlertRuleList) GetAlertRules() []ModelsAlertRule`

GetAlertRules returns the AlertRules field if non-nil, zero value otherwise.

### GetAlertRulesOk

`func (o *ModelsAlertRuleList) GetAlertRulesOk() (*[]ModelsAlertRule, bool)`

GetAlertRulesOk returns a tuple with the AlertRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertRules

`func (o *ModelsAlertRuleList) SetAlertRules(v []ModelsAlertRule)`

SetAlertRules sets AlertRules field to given value.

### HasAlertRules

`func (o *ModelsAlertRuleList) HasAlertRules() bool`

HasAlertRules returns a boolean if a field has been set.

### GetPagination

`func (o *ModelsAlertRuleList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsAlertRuleList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsAlertRuleList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsAlertRuleList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


