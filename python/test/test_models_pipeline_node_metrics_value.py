# coding: utf-8

"""
    Monad Swagger API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from monad.models.models_pipeline_node_metrics_value import ModelsPipelineNodeMetricsValue

class TestModelsPipelineNodeMetricsValue(unittest.TestCase):
    """ModelsPipelineNodeMetricsValue unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ModelsPipelineNodeMetricsValue:
        """Test ModelsPipelineNodeMetricsValue
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ModelsPipelineNodeMetricsValue`
        """
        model = ModelsPipelineNodeMetricsValue()
        if include_optional:
            return ModelsPipelineNodeMetricsValue(
                timestamp = 56,
                value = 1.337
            )
        else:
            return ModelsPipelineNodeMetricsValue(
        )
        """

    def testModelsPipelineNodeMetricsValue(self):
        """Test ModelsPipelineNodeMetricsValue"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
