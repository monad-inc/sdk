# ModelsBillingAccountList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BillingAccounts** | Pointer to [**[]ModelsBillingAccount**](ModelsBillingAccount.md) |  | [optional] 
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Methods

### NewModelsBillingAccountList

`func NewModelsBillingAccountList() *ModelsBillingAccountList`

NewModelsBillingAccountList instantiates a new ModelsBillingAccountList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsBillingAccountListWithDefaults

`func NewModelsBillingAccountListWithDefaults() *ModelsBillingAccountList`

NewModelsBillingAccountListWithDefaults instantiates a new ModelsBillingAccountList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBillingAccounts

`func (o *ModelsBillingAccountList) GetBillingAccounts() []ModelsBillingAccount`

GetBillingAccounts returns the BillingAccounts field if non-nil, zero value otherwise.

### GetBillingAccountsOk

`func (o *ModelsBillingAccountList) GetBillingAccountsOk() (*[]ModelsBillingAccount, bool)`

GetBillingAccountsOk returns a tuple with the BillingAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingAccounts

`func (o *ModelsBillingAccountList) SetBillingAccounts(v []ModelsBillingAccount)`

SetBillingAccounts sets BillingAccounts field to given value.

### HasBillingAccounts

`func (o *ModelsBillingAccountList) HasBillingAccounts() bool`

HasBillingAccounts returns a boolean if a field has been set.

### GetPagination

`func (o *ModelsBillingAccountList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsBillingAccountList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsBillingAccountList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsBillingAccountList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


