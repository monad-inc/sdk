# RoutesV3ListEnrichmentsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enrichments** | Pointer to [**[]RoutesV3EnrichmentWithMetadata**](RoutesV3EnrichmentWithMetadata.md) |  | [optional] 
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Methods

### NewRoutesV3ListEnrichmentsResponse

`func NewRoutesV3ListEnrichmentsResponse() *RoutesV3ListEnrichmentsResponse`

NewRoutesV3ListEnrichmentsResponse instantiates a new RoutesV3ListEnrichmentsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3ListEnrichmentsResponseWithDefaults

`func NewRoutesV3ListEnrichmentsResponseWithDefaults() *RoutesV3ListEnrichmentsResponse`

NewRoutesV3ListEnrichmentsResponseWithDefaults instantiates a new RoutesV3ListEnrichmentsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnrichments

`func (o *RoutesV3ListEnrichmentsResponse) GetEnrichments() []RoutesV3EnrichmentWithMetadata`

GetEnrichments returns the Enrichments field if non-nil, zero value otherwise.

### GetEnrichmentsOk

`func (o *RoutesV3ListEnrichmentsResponse) GetEnrichmentsOk() (*[]RoutesV3EnrichmentWithMetadata, bool)`

GetEnrichmentsOk returns a tuple with the Enrichments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrichments

`func (o *RoutesV3ListEnrichmentsResponse) SetEnrichments(v []RoutesV3EnrichmentWithMetadata)`

SetEnrichments sets Enrichments field to given value.

### HasEnrichments

`func (o *RoutesV3ListEnrichmentsResponse) HasEnrichments() bool`

HasEnrichments returns a boolean if a field has been set.

### GetPagination

`func (o *RoutesV3ListEnrichmentsResponse) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *RoutesV3ListEnrichmentsResponse) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *RoutesV3ListEnrichmentsResponse) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *RoutesV3ListEnrichmentsResponse) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


