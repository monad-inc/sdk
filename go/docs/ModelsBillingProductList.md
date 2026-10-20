# ModelsBillingProductList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BillingProducts** | Pointer to [**[]ModelsBillingProduct**](ModelsBillingProduct.md) |  | [optional] 
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Methods

### NewModelsBillingProductList

`func NewModelsBillingProductList() *ModelsBillingProductList`

NewModelsBillingProductList instantiates a new ModelsBillingProductList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsBillingProductListWithDefaults

`func NewModelsBillingProductListWithDefaults() *ModelsBillingProductList`

NewModelsBillingProductListWithDefaults instantiates a new ModelsBillingProductList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBillingProducts

`func (o *ModelsBillingProductList) GetBillingProducts() []ModelsBillingProduct`

GetBillingProducts returns the BillingProducts field if non-nil, zero value otherwise.

### GetBillingProductsOk

`func (o *ModelsBillingProductList) GetBillingProductsOk() (*[]ModelsBillingProduct, bool)`

GetBillingProductsOk returns a tuple with the BillingProducts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingProducts

`func (o *ModelsBillingProductList) SetBillingProducts(v []ModelsBillingProduct)`

SetBillingProducts sets BillingProducts field to given value.

### HasBillingProducts

`func (o *ModelsBillingProductList) HasBillingProducts() bool`

HasBillingProducts returns a boolean if a field has been set.

### GetPagination

`func (o *ModelsBillingProductList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsBillingProductList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsBillingProductList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsBillingProductList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


