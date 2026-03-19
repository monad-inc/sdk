# PrometheusBearerVariant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bearer_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.prometheus_bearer_variant import PrometheusBearerVariant

# TODO update the JSON string below
json = "{}"
# create an instance of PrometheusBearerVariant from a JSON string
prometheus_bearer_variant_instance = PrometheusBearerVariant.from_json(json)
# print the JSON string representation of the object
print(PrometheusBearerVariant.to_json())

# convert the object into a dict
prometheus_bearer_variant_dict = prometheus_bearer_variant_instance.to_dict()
# create an instance of PrometheusBearerVariant from a dict
prometheus_bearer_variant_from_dict = PrometheusBearerVariant.from_dict(prometheus_bearer_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


