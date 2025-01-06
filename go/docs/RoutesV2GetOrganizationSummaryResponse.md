# RoutesV2GetOrganizationSummaryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrganizationId** | **string** |  | 
**Pipelines** | Pointer to [**[]RoutesV2PipelineStatus**](RoutesV2PipelineStatus.md) |  | [optional] 
**Summary** | Pointer to [**RoutesV2OrganizationOverview**](RoutesV2OrganizationOverview.md) |  | [optional] 

## Methods

### NewRoutesV2GetOrganizationSummaryResponse

`func NewRoutesV2GetOrganizationSummaryResponse(organizationId string, ) *RoutesV2GetOrganizationSummaryResponse`

NewRoutesV2GetOrganizationSummaryResponse instantiates a new RoutesV2GetOrganizationSummaryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2GetOrganizationSummaryResponseWithDefaults

`func NewRoutesV2GetOrganizationSummaryResponseWithDefaults() *RoutesV2GetOrganizationSummaryResponse`

NewRoutesV2GetOrganizationSummaryResponseWithDefaults instantiates a new RoutesV2GetOrganizationSummaryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrganizationId

`func (o *RoutesV2GetOrganizationSummaryResponse) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *RoutesV2GetOrganizationSummaryResponse) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *RoutesV2GetOrganizationSummaryResponse) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.


### GetPipelines

`func (o *RoutesV2GetOrganizationSummaryResponse) GetPipelines() []RoutesV2PipelineStatus`

GetPipelines returns the Pipelines field if non-nil, zero value otherwise.

### GetPipelinesOk

`func (o *RoutesV2GetOrganizationSummaryResponse) GetPipelinesOk() (*[]RoutesV2PipelineStatus, bool)`

GetPipelinesOk returns a tuple with the Pipelines field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipelines

`func (o *RoutesV2GetOrganizationSummaryResponse) SetPipelines(v []RoutesV2PipelineStatus)`

SetPipelines sets Pipelines field to given value.

### HasPipelines

`func (o *RoutesV2GetOrganizationSummaryResponse) HasPipelines() bool`

HasPipelines returns a boolean if a field has been set.

### GetSummary

`func (o *RoutesV2GetOrganizationSummaryResponse) GetSummary() RoutesV2OrganizationOverview`

GetSummary returns the Summary field if non-nil, zero value otherwise.

### GetSummaryOk

`func (o *RoutesV2GetOrganizationSummaryResponse) GetSummaryOk() (*RoutesV2OrganizationOverview, bool)`

GetSummaryOk returns a tuple with the Summary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummary

`func (o *RoutesV2GetOrganizationSummaryResponse) SetSummary(v RoutesV2OrganizationOverview)`

SetSummary sets Summary field to given value.

### HasSummary

`func (o *RoutesV2GetOrganizationSummaryResponse) HasSummary() bool`

HasSummary returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


