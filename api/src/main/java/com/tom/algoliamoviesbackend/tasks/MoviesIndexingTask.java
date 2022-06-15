package com.tom.algoliamoviesbackend.tasks;

import com.tom.algoliamoviesbackend.service.MoviesIndexingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * Task in charge of retrying indexing requests.
 */
@Component
public class MoviesIndexingTask {

    MoviesIndexingService moviesIndexingService;

    @Autowired
    public MoviesIndexingTask(MoviesIndexingService moviesIndexingService) {
        this.moviesIndexingService = moviesIndexingService;
    }
    
    @Scheduled(fixedRate = 1, timeUnit = java.util.concurrent.TimeUnit.HOURS) // 1 hour
    public void performStalledIndexing() {
        moviesIndexingService.performAllIndexingAwaiting();
    }
}
