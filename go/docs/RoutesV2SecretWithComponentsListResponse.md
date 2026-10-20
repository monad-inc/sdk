# RoutesV2SecretWithComponentsListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**Secrets** | Pointer to [**[]RoutesV2SecretWithComponentsResponse**](RoutesV2SecretWithComponentsResponse.md) |  | [optional] 

## Methods

### NewRoutesV2SecretWithComponentsListResponse

`func NewRoutesV2SecretWithComponentsListResponse() *RoutesV2SecretWithComponentsListResponse`

NewRoutesV2SecretWithComponentsListResponse instantiates a new RoutesV2SecretWithComponentsListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2SecretWithComponentsListResponseWithDefaults

`func NewRoutesV2SecretWithComponentsListResponseWithDefaults() *RoutesV2SecretWithComponentsListResponse`

NewRoutesV2SecretWithComponentsListResponseWithDefaults instantiates a new RoutesV2SecretWithComponentsListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *RoutesV2SecretWithComponentsListResponse) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *RoutesV2SecretWithComponentsListResponse) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *RoutesV2SecretWithComponentsListResponse) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *RoutesV2SecretWithComponentsListResponse) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetSecrets

`func (o *RoutesV2SecretWithComponentsListResponse) GetSecrets() []RoutesV2SecretWithComponentsResponse`

GetSecrets returns the Secrets field if non-nil, zero value otherwise.

### GetSecretsOk

`func (o *RoutesV2SecretWithComponentsListResponse) GetSecretsOk() (*[]RoutesV2SecretWithComponentsResponse, bool)`

GetSecretsOk returns a tuple with the Secrets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecrets

`func (o *RoutesV2SecretWithComponentsListResponse) SetSecrets(v []RoutesV2SecretWithComponentsResponse)`

SetSecrets sets Secrets field to given value.

### HasSecrets

`func (o *RoutesV2SecretWithComponentsListResponse) HasSecrets() bool`

HasSecrets returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


