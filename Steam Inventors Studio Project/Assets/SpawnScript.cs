﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpawnScript : MonoBehaviour
{
	public GameObject g;
    private Vector3 startPosition;
	public int i;
	private float t = 0.5f;

    // Start is called before the first frame update
    void Start()
    {
        startPosition = g.transform.position;
    }

    // Update is called once per frame
    void Update()
    {
		t += Time.deltaTime;

		if (t > 1)
		{
			t = 0;
			GameObject temp = Instantiate<GameObject>(g);
			temp.transform.position = startPosition;
		}
    }
}
