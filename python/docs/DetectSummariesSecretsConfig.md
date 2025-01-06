# DetectSummariesSecretsConfig

CrowdStrike EDR detect summaries secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client ID for the CrowdStrike API. This is required to authenticate requests. | [optional] 
**client_secret** | **str** | Client Secret for the CrowdStrike API. This is required to authenticate requests. | [optional] 

## Example

```python
from monad.models.detect_summaries_secrets_config import DetectSummariesSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DetectSummariesSecretsConfig from a JSON string
detect_summaries_secrets_config_instance = DetectSummariesSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(DetectSummariesSecretsConfig.to_json())

# convert the object into a dict
detect_summaries_secrets_config_dict = detect_summaries_secrets_config_instance.to_dict()
# create an instance of DetectSummariesSecretsConfig from a dict
detect_summaries_secrets_config_from_dict = DetectSummariesSecretsConfig.from_dict(detect_summaries_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


