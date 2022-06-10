package com.tom.algoliamoviesbackend.configuration.properties;

import lombok.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

@ConfigurationProperties(prefix = "app.algolia")
@ConstructorBinding
@Value
public class AlgoliaProperties {
    String apiKey;
    String applicationID;
    String indexName;
}
