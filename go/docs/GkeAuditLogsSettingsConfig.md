# GkeAuditLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClusterName** | **string** | The name of the GKE cluster. | 
**Location** | **string** | The GCP location (region or zone) where the GKE cluster runs, e.g. us-central1. | 
**ProjectId** | **string** | The GCP project ID that contains the GKE cluster. | 

## Methods

### NewGkeAuditLogsSettingsConfig

`func NewGkeAuditLogsSettingsConfig(clusterName string, location string, projectId string, ) *GkeAuditLogsSettingsConfig`

NewGkeAuditLogsSettingsConfig instantiates a new GkeAuditLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGkeAuditLogsSettingsConfigWithDefaults

`func NewGkeAuditLogsSettingsConfigWithDefaults() *GkeAuditLogsSettingsConfig`

NewGkeAuditLogsSettingsConfigWithDefaults instantiates a new GkeAuditLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClusterName

`func (o *GkeAuditLogsSettingsConfig) GetClusterName() string`

GetClusterName returns the ClusterName field if non-nil, zero value otherwise.

### GetClusterNameOk

`func (o *GkeAuditLogsSettingsConfig) GetClusterNameOk() (*string, bool)`

GetClusterNameOk returns a tuple with the ClusterName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterName

`func (o *GkeAuditLogsSettingsConfig) SetClusterName(v string)`

SetClusterName sets ClusterName field to given value.


### GetLocation

`func (o *GkeAuditLogsSettingsConfig) GetLocation() string`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *GkeAuditLogsSettingsConfig) GetLocationOk() (*string, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *GkeAuditLogsSettingsConfig) SetLocation(v string)`

SetLocation sets Location field to given value.


### GetProjectId

`func (o *GkeAuditLogsSettingsConfig) GetProjectId() string`

GetProjectId returns the ProjectId field if non-nil, zero value otherwise.

### GetProjectIdOk

`func (o *GkeAuditLogsSettingsConfig) GetProjectIdOk() (*string, bool)`

GetProjectIdOk returns a tuple with the ProjectId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectId

`func (o *GkeAuditLogsSettingsConfig) SetProjectId(v string)`

SetProjectId sets ProjectId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


